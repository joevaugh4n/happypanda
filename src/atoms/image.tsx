import Button from "./button";

interface Props {
    title: string;
    src: string;
    caption?: string;
    cta?: {
        caption: string;
        link: string;
    }
}

export default function Picture({ title, src, caption, cta }: Props) {
    return (
        <>
            <figure>
                <img title={title} alt={title} className={`rounded-lg ${caption || cta && cta.caption && 'mb-2'}`} src={src} />
                {caption && <p className='text-sm'>{caption}</p>}
                {cta && <Button caption={cta.caption} link={cta.link} />}
            </figure>
        </>
    )
}