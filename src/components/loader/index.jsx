import s from "./loader.module.scss"

export const Loader = () => {
  return (
    <div className={s.loader}>
        <div class={s.spinner}></div>
    </div>
  )
}
