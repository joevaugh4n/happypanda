import Nav from "./navigation"

export default function Footer() {

    return (
        <section className='text-pretty py-8 flex justify-between items-end gap-4 margin'>
            <div>
                <p className='mb-2 font-semibold'>© <span className='tracking-wider'>Happy Panda Café</span>, 2024</p>
                <p><span className='font-semibold'>Happy Panda Café</span>: 80 Christchurch Road, Reading, RG2 7AZ</p>
                <p className='mb-4'><span className='font-semibold'>Kungfu Kitchen</span>: 62 Christchurch Road, Reading, RG2 7AZ</p>
            </div>
            <Nav />
        </section>
    )
}