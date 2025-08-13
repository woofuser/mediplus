import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  Users, 
  TrendingUp,
  Wifi,
  WifiOff,
  RefreshCw,
  Download,
  Settings
} from "lucide-react";

interface ChatSession {
  sessionId: string;
  botType: 'mindful' | 'medbot';
  userId?: string;
  startTime: string;
  lastActivity: string;
  messageCount: number;
  status: 'active' | 'ended' | 'error';
  mood?: string;
}

interface ChatMessage {
  id: string;
  sessionId: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: string;
  botType: 'mindful' | 'medbot';
  error?: string;
}

interface SystemHealth {
  chatAPI: boolean;
  llmAPI: boolean;
  notifications: boolean;
  lastCheck: string;
}

export default function DeveloperDashboard() {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [recentMessages, setRecentMessages] = useState<ChatMessage[]>([]);
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    chatAPI: false,
    llmAPI: false,
    notifications: false,
    lastCheck: new Date().toISOString()
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration (in real app, this would come from API)
  useEffect(() => {
    const loadMockData = () => {
      const mockSessions: ChatSession[] = [
        {
          sessionId: "session_1703123456_abc123",
          botType: "mindful",
          userId: "user_001",
          startTime: new Date(Date.now() - 3600000).toISOString(),
          lastActivity: new Date(Date.now() - 300000).toISOString(),
          messageCount: 8,
          status: "ended",
          mood: "anxious"
        },
        {
          sessionId: "session_1703123789_def456", 
          botType: "medbot",
          startTime: new Date(Date.now() - 1800000).toISOString(),
          lastActivity: new Date(Date.now() - 60000).toISOString(),
          messageCount: 5,
          status: "active"
        },
        {
          sessionId: "session_1703124000_ghi789",
          botType: "mindful",
          startTime: new Date(Date.now() - 7200000).toISOString(),
          lastActivity: new Date(Date.now() - 3600000).toISOString(),
          messageCount: 12,
          status: "error",
          mood: "struggling"
        }
      ];

      const mockMessages: ChatMessage[] = [
        {
          id: "msg_001",
          sessionId: "session_1703123456_abc123",
          type: "user",
          message: "I'm feeling really anxious today",
          timestamp: new Date(Date.now() - 300000).toISOString(),
          botType: "mindful"
        },
        {
          id: "msg_002", 
          sessionId: "session_1703123456_abc123",
          type: "bot",
          message: "I understand that anxiety can feel overwhelming. Let's try to ground you in the present moment.",
          timestamp: new Date(Date.now() - 295000).toISOString(),
          botType: "mindful"
        },
        {
          id: "msg_003",
          sessionId: "session_1703124000_ghi789",
          type: "user", 
          message: "Can you help me with my blood pressure medication?",
          timestamp: new Date(Date.now() - 120000).toISOString(),
          botType: "medbot"
        },
        {
          id: "msg_004",
          sessionId: "session_1703124000_ghi789",
          type: "bot",
          message: "I'm experiencing some technical difficulties. Please try again in a moment.",
          timestamp: new Date(Date.now() - 115000).toISOString(),
          botType: "medbot",
          error: "LLM API timeout"
        }
      ];

      setChatSessions(mockSessions);
      setRecentMessages(mockMessages);
      setIsLoading(false);
    };

    loadMockData();
  }, []);

  const checkSystemHealth = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/health');
      if (response.ok) {
        const health = await response.json();
        setSystemHealth({
          chatAPI: true,
          llmAPI: health.llmConfigured || false,
          notifications: health.notificationsConfigured || false,
          lastCheck: new Date().toISOString()
        });
        setError(null);
      } else {
        throw new Error(`Health check failed: ${response.status}`);
      }
    } catch (err) {
      setError(`System health check failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setSystemHealth(prev => ({
        ...prev,
        chatAPI: false,
        lastCheck: new Date().toISOString()
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const testChatAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: "Test message from developer dashboard",
          botType: "mindful",
          sessionId: "test_session_dev",
          context: {}
        })
      });

      if (response.ok) {
        const result = await response.json();
        setError(null);
        alert('Chat API test successful!\n\nResponse: ' + result.response?.message?.substring(0, 100) + '...');
      } else {
        throw new Error(`API test failed: ${response.status}`);
      }
    } catch (err) {
      setError(`Chat API test failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const exportChatHistory = () => {
    const data = {
      sessions: chatSessions,
      messages: recentMessages,
      exportTime: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-history-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    checkSystemHealth();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'ended': return 'bg-gray-100 text-gray-800'; 
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    totalSessions: chatSessions.length,
    activeSessions: chatSessions.filter(s => s.status === 'active').length,
    errorSessions: chatSessions.filter(s => s.status === 'error').length,
    totalMessages: recentMessages.length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Developer Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor chatbot performance and chat history</p>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                onClick={checkSystemHealth} 
                variant="outline" 
                size="sm"
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button 
                onClick={testChatAPI} 
                variant="outline" 
                size="sm"
                disabled={isLoading}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Test API
              </Button>
              <Button 
                onClick={exportChatHistory} 
                variant="outline" 
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Export History
              </Button>
            </div>
          </div>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <h3 className="font-medium text-red-800">System Error</h3>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* System Health Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chat API</CardTitle>
              {systemHealth.chatAPI ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemHealth.chatAPI ? "Online" : "Offline"}
              </div>
              <p className="text-xs text-muted-foreground">
                API endpoint status
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">LLM Integration</CardTitle>
              {systemHealth.llmAPI ? (
                <Wifi className="h-4 w-4 text-green-600" />
              ) : (
                <WifiOff className="h-4 w-4 text-orange-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemHealth.llmAPI ? "Active" : "Fallback"}
              </div>
              <p className="text-xs text-muted-foreground">
                OpenAI API status
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeSessions}</div>
              <p className="text-xs text-muted-foreground">
                {stats.totalSessions} total sessions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.totalSessions > 0 ? Math.round((stats.errorSessions / stats.totalSessions) * 100) : 0}%
              </div>
              <p className="text-xs text-muted-foreground">
                {stats.errorSessions} error sessions
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sessions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="sessions">Chat Sessions</TabsTrigger>
            <TabsTrigger value="messages">Recent Messages</TabsTrigger>
            <TabsTrigger value="system">System Info</TabsTrigger>
          </TabsList>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Chat Sessions</CardTitle>
                <CardDescription>
                  Overview of all chat sessions and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {chatSessions.map((session) => (
                      <div key={session.sessionId} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                            <Badge variant="secondary">
                              {session.botType}
                            </Badge>
                            {session.mood && (
                              <Badge variant="outline">
                                mood: {session.mood}
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {session.messageCount} messages
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p><strong>Session:</strong> {session.sessionId}</p>
                          <p><strong>User:</strong> {session.userId || 'Anonymous'}</p>
                          <p><strong>Started:</strong> {new Date(session.startTime).toLocaleString()}</p>
                          <p><strong>Last Activity:</strong> {new Date(session.lastActivity).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>
                  Latest chat messages across all sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div key={message.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={message.type === 'user' ? 'default' : 'secondary'}>
                              {message.type}
                            </Badge>
                            <Badge variant="outline">
                              {message.botType}
                            </Badge>
                            {message.error && (
                              <Badge variant="destructive">
                                Error
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(message.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm space-y-2">
                          <p><strong>Session:</strong> {message.sessionId}</p>
                          <p><strong>Message:</strong> {message.message}</p>
                          {message.error && (
                            <p className="text-red-600"><strong>Error:</strong> {message.error}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Environment Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>OpenAI API Key:</span>
                    <Badge variant={systemHealth.llmAPI ? "default" : "secondary"}>
                      {systemHealth.llmAPI ? "Configured" : "Missing"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Developer Notifications:</span>
                    <Badge variant={systemHealth.notifications ? "default" : "secondary"}>
                      {systemHealth.notifications ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Health Check:</span>
                    <span className="text-sm text-gray-600">
                      {new Date(systemHealth.lastCheck).toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Debug Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    onClick={checkSystemHealth} 
                    variant="outline" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Check System Health
                  </Button>
                  <Button 
                    onClick={testChatAPI} 
                    variant="outline" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Test Chat API
                  </Button>
                  <Button 
                    onClick={() => window.open('/api/health', '_blank')} 
                    variant="outline" 
                    className="w-full"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    View API Health
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
