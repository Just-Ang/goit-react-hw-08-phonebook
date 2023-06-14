
const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      paddingTop: 200,
      fontWeight: 900,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
         MY PHONEBOOK
        </h1>
      </div>
    );
  }
  