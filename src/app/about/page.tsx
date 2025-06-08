import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { BsWhatsapp } from 'react-icons/bs';
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function WhatsappIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <BsWhatsapp size={24} color="#25D366" />; // official WhatsApp green
}


export const metadata: Metadata = {
  title: 'About',
  description:
    'R.B Sharma- The Mentor Who Shaped Thousands of Commerce Careers',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20 flex justify-center items-center">
          <div className="max-w-xs px-2.5 flex items-center justify-center lg:max-w-none p-12 mt-5">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
           <h3 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Know Your Mentor
          </h3>
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl dark:text-zinc-100">
            Mr. R.B Sharma
          </h1>

         
          {/* <h3 text-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100>
            Mr. R.B Sharma
          </h3> */}
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
  <p>
    R.B. Sharma is a respected name in commerce education with over 30 years of experience. Known for his clear and concept-driven teaching style, he has guided thousands of students in Chandigarh to achieve top ranks and academic success.
  </p>
  <p>
    His coaching consistently delivers excellent results in Accountancy, Business Studies, and Economics. Students appreciate how he simplifies difficult topics, builds strong fundamentals, and boosts their confidence beyond exams.
  </p>
  <p>
    What makes R.B. Sharma truly unique is his dedication to every student's progress. Through personalized notes, doubt-solving sessions, and well-planned revisions, his classes focus on mastering the subject, not just scoring marks.
  </p>
</div>

        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink> */}
            {/* <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink> */}
            
          </ul>
        </div>
      </div>
    </Container>
  )
}
