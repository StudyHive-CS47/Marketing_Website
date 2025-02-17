import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { category: "Productivity", Before: 70, After: 100 },
  { category: "Deadline Management", Before: 30, After: 80 },
  { category: "Academic Performance", Before: 75, After: 95 },
  { category: "Feature Usage", Before: 40, After: 90 },
];

const StudyHiveImpactChart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5">
      <h2 className="text-3xl font-bold text-center text-studyhive-dark mb-4">Impact Analysis</h2>
      <p className="text-lg text-center mb-6 max-w-2xl text-gray-600">
        Our analysis shows significant improvements in productivity, deadline management, and academic performance after implementing StudyHive.
      </p>
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg mb-8">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="category" stroke="#4b5563" />
            <YAxis stroke="#4b5563" />
            <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#111" }} />
            <Legend wrapperStyle={{ color: "#111" }} />
            <Bar dataKey="Before" fill="#3B82F6" name="Before StudyHive" barSize={40} />
            <Bar dataKey="After" fill="#1E3A8A" name="With StudyHive" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-studyhive-accent mb-2">✅</div>
          <div className="font-semibold text-studyhive-dark">Productivity</div>
          <div className="text-sm text-gray-600">30% increase in efficiency</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-studyhive-accent mb-2">✅</div>
          <div className="font-semibold text-studyhive-dark">Deadline Management</div>
          <div className="text-sm text-gray-600">50% reduction in missed deadlines</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-studyhive-accent mb-2">✅</div>
          <div className="font-semibold text-studyhive-dark">Academic Performance</div>
          <div className="text-sm text-gray-600">20% improvement</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-studyhive-accent mb-2">✅</div>
          <div className="font-semibold text-studyhive-dark">Feature Usage</div>
          <div className="text-sm text-gray-600">65% search, 50% chat, 60% notes</div>
        </div>
      </div>
    </div>
  );
};

export default StudyHiveImpactChart; 