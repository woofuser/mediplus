export default function TestPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          🎉 Website is Working!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          The React app has loaded successfully.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => window.location.href = '/medbot/home'}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Go to Dashboard
          </button>
          <button 
            onClick={() => window.location.href = '/medbot'}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Go to MedBot
          </button>
          <button 
            onClick={() => window.location.href = '/developer'}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Developer Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
