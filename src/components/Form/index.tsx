import debounce from 'lodash.debounce';

import styles from './styles.module.css';

type Props = {
  onSubmit: (search: string) => Promise<void>;
  postCount: number;
};

function Form({ onSubmit, postCount }: Props) {
  const handleQueryChange = debounce(
    (value: string) => onSubmit(value.trim()),
    300
  );

  return (
    <form className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2>Publicações</h2>
        <span>
          {postCount} {postCount === 1 ? 'Publicação' : 'Publicações'}
        </span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(ev) => handleQueryChange(ev.target.value)}
      />
    </form>
  );
}

export default Form;
