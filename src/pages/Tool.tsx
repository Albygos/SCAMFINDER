import React, { useState } from 'react';
import { Mail, AlertCircle, CheckCircle, Loader2, Shield, Info } from 'lucide-react';

export default function Tool() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { safe: boolean; explanation: string; details: { score: number; checks: Array<{ name: string; passed: boolean; description: string }> } }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResult({
        safe: Math.random() > 0.5,
        explanation: "Based on our comprehensive analysis, this email demonstrates characteristics consistent with legitimate business communication. The sender's domain is properly configured with valid SPF and DKIM records, and the content analysis reveals no suspicious patterns or urgent calls to action typically associated with phishing attempts.",
        details: {
          score: 92,
          checks: [
            {
              name: "SPF Verification",
              passed: true,
              description: "Sender Policy Framework records are valid and authorized"
            },
            {
              name: "DKIM Signature",
              passed: true,
              description: "Digital signature is authentic and unmodified"
            },
            {
              name: "Content Analysis",
              passed: true,
              description: "No suspicious patterns or urgent action requests detected"
            },
            {
              name: "Link Safety",
              passed: true,
              description: "All URLs point to legitimate domains"
            }
          ]
        }
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Email Security Analysis
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our advanced AI analyzes your email for potential security threats and provides detailed, actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Analysis Tool */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email-content" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Content
                    </label>
                    <textarea
                      id="email-content"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      rows={12}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Paste the complete email content here, including headers..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Shield className="h-5 w-5 mr-2" />
                        Analyze Email
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="lg:col-span-1">
            {result ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Analysis Results</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      result.safe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {result.safe ? 'Safe' : 'Suspicious'}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Safety Score</span>
                      <span className="text-lg font-bold text-blue-600">{result.details.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${result.details.score}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Security Checks</h4>
                  <div className="space-y-4">
                    {result.details.checks.map((check) => (
                      <div key={check.name} className="flex items-start">
                        {check.passed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        )}
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{check.name}</p>
                          <p className="text-sm text-gray-500">{check.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <Info className="h-12 w-12 text-gray-400 mx-auto" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Waiting for Analysis</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Paste your email content and click analyze to receive detailed security insights.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}