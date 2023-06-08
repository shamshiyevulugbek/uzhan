
export const Option = ({type,text,selected,isResult,correct}) => {
    let letter
    switch (type) {
        case 0:
            letter = "A"
            break;
        case 1:
            letter = "B"
            break;
        case 2:
            letter = "C"
            break;
        case 3:
            letter = "D"
            break;
        default:
            break;
    }
  return (
    <div style={{backgroundColor:(type === selected && !isResult?"green":(isResult && type === selected && selected === correct)?"green":(isResult && type === selected && selected !== correct)?"red":(isResult && type !== selected && type === correct)?"yellow":"white")}}>
        {letter} - {atob(text)}
    </div>
  )
}
