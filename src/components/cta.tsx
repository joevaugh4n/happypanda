import Button from "../atoms/button";

export default function CTA() {
    return (
        <section className='flex gap-4 sm:justify-normal'>
            <Button disable caption='Menu' link='test' />
            <Button caption='Book now' link='tel:07587 577966' />
        </section>
    )
}