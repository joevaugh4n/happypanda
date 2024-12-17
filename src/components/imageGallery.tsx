import kfk from '/assets/kfk.jpg'
import Picture from '../atoms/image'

export default function ImageGallery() {
    return (
        <section className='grid md:grid-cols-2 gap-16 margin py-8 border-b-4 border-blue-300'>
            <Picture title='Example image' src={kfk} cta={{ caption: 'Example button', link: 'yes' }} />
            <Picture title='Example image' src={kfk} caption='Example caption' />
            <Picture title='Example image' src={kfk} caption='Example caption' />
            <Picture title='Example image' src={kfk} caption='Example caption' />
        </section>
    )
}