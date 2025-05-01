
const Button = ({ text, className, id}) => {
  return (
	<a href="" className={`${className ?? ''} cta-wrapper`} onClick={(e)=>{
		e.preventDefault()
		const target = document.getElementById('counter')
		if(target && id){
			const offset = window.innerHeight * 0.15;

			const top = target.getBoundingClientRect().top + window.scrollY - offset
			window.scrollTo({top, behavior:'smooth'})
		}
	}}>
		<div className="cta-button group">
			<div className="bg-circle"/>
			<p className="text">{text}</p>
			<div className="arrow-wrapper">
				<img src="/public/images/arrow-down.svg" alt="arrrow-down" />
			</div>
		</div>
	</a>
  )
}

export default Button
