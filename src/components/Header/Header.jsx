import style from './Header.module.css';

export default function Header() {
  return (
    <div className={style.container}>
      <ul className={style.menu}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Proyects</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
  )
}