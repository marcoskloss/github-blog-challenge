import styles from './styles.module.css';

function Form() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </form>
  );
}

export default Form;
