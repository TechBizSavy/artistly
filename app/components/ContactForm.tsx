'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Background } from './Background';


export default function ContactForm() {
  return (
    <div>
        <Background/>
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact Artist Team
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Have a question or inquiry? Get in touch with our artist team.
          </p>
        </div>

        {/* Card container with border */}
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-2xl">
          <form
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-200"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-gray-800 border border-gray-600 px-3.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-gray-800 border border-gray-600 px-3.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Organization (Optional)
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="block w-full rounded-md bg-gray-800 border border-gray-600 px-3.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-gray-800 border border-gray-600 px-3.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-gray-800 border border-gray-600 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                    <div className="relative grid shrink-0 grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        className="w-full appearance-none rounded-md py-2 pr-7 pl-3.5 bg-gray-800 text-white focus:outline-none sm:text-sm border-r border-gray-600"
                      >
                        <option>US</option>
                        <option>IN</option>
                        <option>EU</option>
                      </select>
                      <ChevronDownIcon
                        className="pointer-events-none absolute right-2 top-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="text"
                      placeholder="123-456-7890"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-white bg-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Your Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your inquiry, booking request, or any questions you have..."
                    className="block w-full rounded-md bg-gray-800 border border-gray-600 px-3.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <label
                  htmlFor="agree-to-policies"
                  className="text-sm text-gray-300"
                >
                  By selecting this, you agree to our{' '}
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
 </div>
  );
}