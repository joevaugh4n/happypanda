import Button from "../atoms/button"

interface Props {
    title: string;
    subheading: string;
}

export default function Header({ title, subheading }: Props) {
    return (
        <header className='relative pt-16 bg-header-bg bg-cover border-blue-300 border-b-4 h-[80vh] w-screen'>
            <div className='absolute inset-0 bg-gradient-to-b from-black/75 to-transparent'></div>
            <section className='relative z-10 flex md:flex-row flex-col md:gap0 gap-4 justify-between items-start md:px-12 px-6'>
                <section>
                    <h1>{title}</h1>
                    <p className='subheading'>{subheading}</p>
                </section>
                <Button caption='Reservations' link='test' />
            </section>
        </header>
    )
}