import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Users, TrendingUp, Calendar, Download, Search } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, today: 0, thisWeek: 0 });
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
  const token = localStorage.getItem('admin_token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [filterStatus, search]);

  const fetchData = async () => {
    try {
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      // Fetch stats
      const statsRes = await fetch(`${API_URL}/api/leads/stats`, { headers });
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      // Fetch leads
      let url = `${API_URL}/api/leads`;
      const params = new URLSearchParams();
      if (filterStatus) params.append('status', filterStatus);
      if (search) params.append('search', search);
      if (params.toString()) url += `?${params.toString()}`;

      const leadsRes = await fetch(url, { headers });
      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        setLeads(leadsData);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.message.includes('401')) {
        localStorage.clear();
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (leadId, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/api/leads/${leadId}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const exportCSV = () => {
    const csv = [
      ['Nome', 'Empresa', 'Telefone', 'Faturação', 'Status', 'Data'],
      ...leads.map(lead => [
        lead.fullName,
        lead.companyAndSector,
        lead.phone,
        lead.revenue,
        lead.status,
        new Date(lead.createdAt).toLocaleDateString('pt-PT')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-eleva-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const logout = () => {
    localStorage.clear();
    navigate('/admin/login');
  };

  const revenueLabels = {
    'A': 'Até 2.500€',
    'B': '2.500€ – 7.500€',
    'C': '7.500€ – 15.000€',
    'D': 'Mais de 15.000€'
  };

  const statusLabels = {
    'novo': 'Novo',
    'contactado': 'Contactado',
    'interessado': 'Interessado',
    'fechado': 'Fechado',
    'perdido': 'Perdido'
  };

  const statusColors = {
    'novo': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'contactado': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'interessado': 'bg-green-500/20 text-green-400 border-green-500/30',
    'fechado': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'perdido': 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/4fxcadmm_0ae9043e-abb3-4116-ad86-d62d95e0c279.png"
              alt="ELEVA"
              className="h-12 md:h-16 w-auto"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white uppercase">Dashboard</h1>
              <p className="text-white/60 text-sm">{localStorage.getItem('admin_name')}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">Sair</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#111111] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Total de Leads</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111111] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Hoje</p>
                <p className="text-2xl font-bold text-white">{stats.today}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111111] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Esta Semana</p>
                <p className="text-2xl font-bold text-white">{stats.thisWeek}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Pesquisar por nome ou empresa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/50 border border-white/20 rounded-lg px-12 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="">Todos os Status</option>
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Exportar CSV</span>
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-[#111111] border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase">Nome</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase hidden md:table-cell">Empresa</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase hidden lg:table-cell">Telefone</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase hidden lg:table-cell">Faturação</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase hidden md:table-cell">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-white/60">
                      A carregar...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-white/60">
                      Nenhum lead encontrado
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-white">{lead.fullName}</div>
                        <div className="text-sm text-white/60 md:hidden">{lead.companyAndSector}</div>
                      </td>
                      <td className="px-6 py-4 text-white/80 hidden md:table-cell">{lead.companyAndSector}</td>
                      <td className="px-6 py-4 text-white/80 hidden lg:table-cell">{lead.phone}</td>
                      <td className="px-6 py-4 text-white/80 hidden lg:table-cell">{revenueLabels[lead.revenue]}</td>
                      <td className="px-6 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[lead.status]} cursor-pointer`}
                        >
                          {Object.entries(statusLabels).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 text-white/60 text-sm hidden md:table-cell">
                        {new Date(lead.createdAt).toLocaleDateString('pt-PT')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
