import { Disclosure, Transition } from '@headlessui/react'

const faq = [
    { question: 'How do I use this?', answer: 'You can use this tool several different ways. You can input improperly formatted JSON and the tool will format the JSON correctly. Or you can type what kind of sample JSON you need for example type in "sample recipes limit 5" and the tool will generate a sample JSON for you.' },
    { question: 'What is GPT-3?', 
    answer: 'GPT-3 is a machine learning framework that can be used to generate text from a set of pre-trained models.', 
    current: false },
    { question: 'What is JSON?', 
    answer: 'JSON is a data format that is used to store and transmit data. It is a subset of the JavaScript object notation (JSON) language.', 
    current: false },
    { question: 'What is Tailwind CSS?', 
    answer: 'Tailwind CSS is a utility-first CSS framework that is used to build responsive, mobile-first websites.', 
    current: false },
    { question: 'What is React?', 
    answer: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.', 
    current: false },
  ]

export default function Faq() {
  return (
    <div id="faq" className="bg-green-600 p-10">
    <h1 className="text-5xl text-white">FAQ</h1>
    <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-md bg-white p-2">
            {faq.map((item) => (
                <Disclosure as="div" className="mt-2">
                    <Disclosure.Button className="flex w-full justify-between rounded-md bg-green-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {item.question}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {item.answer}
                    </Disclosure.Panel>
                </Disclosure>

                ))}
        </div>
    </div>
    </div>
  )
}