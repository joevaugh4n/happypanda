import CTA from "./cta"
import Link from "../atoms/link"
import GettingHere from "./getting-here"

export default function About() {

    return (
        <section className='margin flex flex-col gap-y-4 pt-8'>
            <div className='flex md:flex-row flex-col gap-x-8'>
                <h2>A new, all-day café in south Reading</h2>
                <div>
                    <p className='mb-2'>Since 2019, we’ve been serving up Reading’s best-reviewed Chinese meals at <Link caption='Kungfu Kitchen' target='https://kungfureading.co.uk' />. Now, we’re expanding to bring you all-day breakfasts (including English and Chinese options), dim sum, authentic Cantonese cuisine, and BBQ.</p>
                    <ul>
                        <li><span className='list-label'>9am - 12pm</span>: English & Chinese breakfasts</li>
                        <li><span className='list-label'>12pm - 5pm</span>: Dim Sum, authentic Cantonese cuisine</li>
                        <li><span className='list-label'>Evening</span>: Authentic Cantonese cuisine, BBQ, hot pot</li>
                    </ul>
                </div>
            </div>
            <CTA />
        </section>
    )
}