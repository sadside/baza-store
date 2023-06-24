import Link from "next/link";


type Props = {}


type LinkType = {
	title: string
	link: string,
}

const links: LinkType[] = [
	{
		title: 'Женщины',
		link: '/category/womens'
	},
	{
		title: 'Мужчины',
		link: '/for-women'
	},
	{
		title: 'Дети',
		link: '/for-women'
	},
	{
		title: 'Доставка',
		link: '/for-women'
	},
	{
		title: 'Программа лояльности',
		link: '/for-women'
	},
]

const MenuLinks = (props: Props) => {
	return (
		<ul>
			{links.map(link => (
				<Link href={link.link} style={{textDecoration: 'none', color: '#000'}}>
					<li>{link.title}</li>
				</Link>
			))}
		</ul>
	)
}

export default MenuLinks
