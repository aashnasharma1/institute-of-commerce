import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/Container'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import About from './about/page'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

const phoneNumber = '919876302560'
const message = encodeURIComponent(
  "Hi! I'm interested in booking a free tutoring session. Please let me know the details.",
)

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
function Newsletter() {
  return (
    <div className="max-w-sm rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaWhatsapp className="h-6 w-6 flex-none text-green-500" />
        <span className="ml-3">Book Free Tutoring Session</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Click the button below to book your free tutoring session via WhatsApp.
      </p>
      <div className="mt-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
        >
          <FaWhatsapp className="mr-2 h-5 w-5" />
          Book Now
        </a>
      </div>
    </div>
  )
}

function Resume() {
  const plusOneSubjects = [
    'Accountancy',
    'Business Studies',
    'Economics',
    'English',
    'Mathematics',
    'Informatics Practices',
  ]

  const plusTwoSubjects = [
    'Accountancy',
    'Business Studies',
    'Economics',
    'English',
    'Mathematics',
    'Entrepreneurship',
    'Taxation',
    'Finance',
    'Auditing',
  ]

  const bcomSubjects = [
    'Financial Accounting',
    'Cost Accounting',
    'Corporate Accounting',
    'Business Law',
    'Company Law',
    'Income Tax',
    'GST & Indirect Taxes',
    'Auditing & Assurance',
    'Financial Management',
    'Business Economics',
    'Marketing',
    'Management Principles',
    'Banking & Insurance',
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="mb-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Subjects We Teach</span>
      </h2>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
          +1 Commerce
        </h3>
        <ul className="list-inside list-disc space-y-1 text-zinc-700 dark:text-zinc-300">
          {plusOneSubjects.map((subject, i) => (
            <li key={i} className="text-sm font-medium">
              {subject}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
          +2 Commerce
        </h3>
        <ul className="list-inside list-disc space-y-1 text-zinc-700 dark:text-zinc-300">
          {plusTwoSubjects.map((subject, i) => (
            <li key={i} className="text-sm font-medium">
              {subject}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
          {' '}
          B.Com Subjects
        </h3>
        <ul className="list-inside list-disc space-y-1 text-zinc-700 dark:text-zinc-300">
          {bcomSubjects.map((subject, i) => (
            <li key={i} className="text-sm font-medium">
              {subject}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const reviews = [
  {
    title: 'Transformed My Commerce Journey!',
    name: 'Anjali Singh',
    date: 'March 12, 2025',
    text: 'RB Sharma sir’s coaching transformed my understanding of commerce subjects. His teaching method is crystal clear, and I scored top marks in my +2 exams!',
  },
  {
    title: 'Best Tuition for Commerce in Chandigarh',
    name: 'Rahul Mehta',
    date: 'February 28, 2025',
    text: 'The best commerce tuition in Chandigarh! RB Sharma sir personally guides every student and helps with 1-on-1 doubt clearing. Highly recommended.',
  },
  {
    title: 'Confidence and Top Results',
    name: 'Priya Kaur',
    date: 'January 15, 2025',
    text: 'After joining RB Sharma’s classes, I felt confident and well-prepared. Many city toppers have been his students – now I know why!',
  },
  {
    title: 'Commerce Made Easy and Fun',
    name: 'Rohit Sharma',
    date: 'April 2, 2025',
    text: 'This is the place where commerce becomes easy and fun. RB Sharma’s expertise and experience of 30+ years truly show in his teaching.',
  },
]

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Crack Commerce with Confidence!
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            With over 30 years of unmatched teaching experience, R.B. Sharma has
            been the backbone of success for commerce students across
            Chandigarh. Specializing in Accountancy, Business Studies, and
            Economics, he has mentored countless students — including many of
            the city's past toppers — to academic excellence in Class 11, 12,
            and B.Com.
          </p>
          <div className="mt-6 flex gap-6"></div>
        </div>
      </Container>
      <Photos />
      <About />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto pl-2">
          <h1 className="mb-4 text-4xl font-extrabold text-blue-700 dark:text-zinc-300">
            Student Reviews & Testimonials
          </h1>
          <h2 className="mb-8 text-2xl font-semibold text-blue-600 dark:text-zinc-200">
            What Our Students Say
          </h2>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {reviews.map(({ title, name, date, text }, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-blue-50 p-10 shadow-lg dark:bg-zinc-800"
              >
                <h3 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {title}
                </h3>
                <p className="mb-6 text-lg text-zinc-700 italic dark:text-zinc-300">
                  "{text}"
                </p>
                <div className="flex justify-between text-sm font-semibold text-zinc-500 dark:text-zinc-200">
                  <span>{name}</span>
                  <time dateTime={date}>{date}</time>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-zinc-50 p-6 shadow-md dark:bg-zinc-800">
          <h2 className="text-2xl font-semibold text-red-700 dark:text-zinc-100">
            Visit for a Free 1-on-1 Tuition Consultation
          </h2>

          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Curious about how R.B. Sharma can help you or your child excel in
            commerce? You're welcome to visit us at our home for a free,
            one-on-one tuition consultation. Meet the educator personally, ask
            your questions, and discuss your academic goals.
          </p>

          <p className="mt-4 text-base font-medium text-zinc-700 dark:text-zinc-300">
            📍 House Number 7A, Sector 30-B,
            <br />
            Chandigarh - 160030
          </p>

          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Walk in anytime between{' '}
            <strong>4 PM - 8 PM (Monday to Saturday)</strong>
            <br />
            No prior appointment needed.
          </p>

          {/* Google Maps Embed */}
          <div className="mt-6 aspect-video overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.222470748719!2d76.79224907540292!3d30.71815558164396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed5fade7d0ff%3A0x1aca8a4c30d2e553!2sInstitute%20Of%20Commerce%2C%2030B%2C%20Sector%2030B%2C%20Chandigarh%2C%20160030!5e0!3m2!1sen!2sin!4v1717830400000!5m2!1sen!2sin"
            ></iframe>
          </div>

          <div className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
            Have any questions? Feel free to call us at{' '}
            <strong>+91 9876302560</strong>
          </div>
        </div>
      </Container>
    </>
  )
}
