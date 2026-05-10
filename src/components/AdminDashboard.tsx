import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Trash2, Save, FileText, Layout, List } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'project' | 'certificate'>('project');
  const [showList, setShowList] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  // Project State
  const [project, setProject] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    github: '',
    tech: '',
    size: 'small'
  });

  // Certificate State
  const [certificate, setCertificate] = useState({
    title: '',
    issuer: '',
    date: '',
    link: '',
    type: 'Professional'
  });

  useEffect(() => {
    const collName = activeTab === 'project' ? 'projects' : 'certificates';
    const q = query(collection(db, collName), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, [activeTab]);

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const techArray = project.tech.split(',').map(t => t.trim()).filter(t => t !== '');
      await addDoc(collection(db, 'projects'), {
        ...project,
        tech: techArray,
        createdAt: serverTimestamp()
      });
      setProject({ title: '', description: '', image: '', link: '', github: '', tech: '', size: 'small' });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'projects');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCertificateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'certificates'), {
        ...certificate,
        createdAt: serverTimestamp()
      });
      setCertificate({ title: '', issuer: '', date: '', link: '', type: 'Professional' });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'certificates');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    const collName = activeTab === 'project' ? 'projects' : 'certificates';
    try {
      await deleteDoc(doc(db, collName, id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, collName);
    }
  };

  return (
    <section id="admin" className="py-24 px-6 min-h-screen bg-black/60 backdrop-blur-3xl">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-display font-bold">Admin Dashboard</h2>
          <div className="flex bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => { setActiveTab('project'); setShowList(false); }}
              className={`px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all ${activeTab === 'project' ? 'bg-primary text-white' : 'text-white/40'}`}
            >
              Projects
            </button>
            <button
              onClick={() => { setActiveTab('certificate'); setShowList(false); }}
              className={`px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all ${activeTab === 'certificate' ? 'bg-accent text-white' : 'text-white/40'}`}
            >
              Certificates
            </button>
          </div>
          <button 
            onClick={() => setShowList(!showList)}
            className="flex items-center gap-2 glass px-6 py-2 rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            {showList ? <Plus size={16} /> : <List size={16} />}
            {showList ? 'Add New' : 'Manage Existing'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {showList ? (
            <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="glass p-6 rounded-2xl flex items-center justify-between group">
                  <div>
                    <h4 className="font-display font-bold">{item.title}</h4>
                    <p className="text-xs text-white/30 font-mono uppercase tracking-widest mt-1">
                      {activeTab === 'project' ? item.category || 'Portfolio' : item.issuer}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-3 text-red-500/50 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {items.length === 0 && <p className="text-center text-white/20 py-12">No items found.</p>}
            </motion.div>
          ) : activeTab === 'project' ? (
            <motion.div key="project-form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass p-10 rounded-[2.5rem]">
              {/* Form content remains same but with updated styles */}
              <form onSubmit={handleProjectSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Layout className="text-primary" />
                  <h3 className="text-xl font-display font-bold">New Project</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Title *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. AI Portfolio"
                      value={project.title}
                      onChange={(e) => setProject({ ...project, title: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Image URL *</label>
                    <input
                      required
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={project.image}
                      onChange={(e) => setProject({ ...project, image: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Description *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the project goals and your role..."
                    value={project.description}
                    onChange={(e) => setProject({ ...project, description: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">GitHub Link</label>
                    <input
                      type="text"
                      value={project.github}
                      onChange={(e) => setProject({ ...project, github: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Live Link</label>
                    <input
                      type="text"
                      value={project.link}
                      onChange={(e) => setProject({ ...project, link: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={project.tech}
                      onChange={(e) => setProject({ ...project, tech: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                      placeholder="React, Django, Python..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Grid Size *</label>
                    <select
                      value={project.size}
                      onChange={(e) => setProject({ ...project, size: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="small">Small (2 cols)</option>
                      <option value="medium">Medium (3 cols)</option>
                      <option value="large">Large (4 cols, 2 rows)</option>
                    </select>
                  </div>
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary/80 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save size={20} />}
                  Add Project
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div key="cert-form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass p-10 rounded-[2.5rem]">
              <form onSubmit={handleCertificateSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-accent" />
                  <h3 className="text-xl font-display font-bold">New Certificate</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Title *</label>
                    <input
                      required
                      type="text"
                      value={certificate.title}
                      onChange={(e) => setCertificate({ ...certificate, title: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Issuer *</label>
                    <input
                      required
                      type="text"
                      value={certificate.issuer}
                      onChange={(e) => setCertificate({ ...certificate, issuer: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Date *</label>
                    <input
                      required
                      type="text"
                      value={certificate.date}
                      onChange={(e) => setCertificate({ ...certificate, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Verify Link</label>
                    <input
                      type="text"
                      value={certificate.link}
                      onChange={(e) => setCertificate({ ...certificate, link: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/40">Type *</label>
                  <select
                    value={certificate.type}
                    onChange={(e) => setCertificate({ ...certificate, type: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="Professional">Professional</option>
                    <option value="Technical">Technical</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white font-bold py-5 rounded-2xl hover:bg-accent/80 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save size={20} />}
                  Add Certificate
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AdminDashboard;
