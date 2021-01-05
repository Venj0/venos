import Link from "next/link"


const pagesMap = [
	{
		id: 0,
		name:"About",
		url:"/About"
	},{
		id: 1,
		name:"About Full",
		url:"/About/Full"
	},{
		id: 2,
		name:"contactUs",
		url:"/ContactUs"
	},{
		id: 3,
		name:"CV",
		url:"/CV"
	},{
		id: 4,
		name:"User CV",
		url:"/CV/user"
	},{
		id: 5,
		name:"our group",
		url:"/OurGroup"
	},{
		id: 6,
		name:"All our group",
		url:"/OurGroup/All"
	},{
		id: 7,
		name:"Portfolio",
		url:"/Portfolio"
	},{
		id: 8,
		name:"all works",
		url:"/Portfolio/All"
	}
]


export const Navbar = () => {
	return (
		<>
			{
				pagesMap.map(
					page=>
						<div key={page.id}>
							<Link href={page.url}><a>{page.name}</a></Link>
							<br/>
						</div>
				)
			}

			<Link href={"/"}><a>home</a></Link>
		</>
	)
}