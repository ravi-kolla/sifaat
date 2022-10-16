import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../../components/Bounded";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading } from "../../components/Heading";
import clsx from "clsx";


const Field = ({ label, children }) => {
  return (
    <label>
      <span className="text-sm text-slate-500">{label}</span>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 mb-1 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-40 w-full  rounded-md border border-gray-300 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const ContactForm = ({ slice }) => {
  return (
    <Bounded as="section" size="small">
      <div>
      {prismicH.isFilled.richText(slice.primary.heading) && (
        <div className="mb-5">
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        </div>
      )}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
          <form
            action="/api/contact"
            method="post"
            className="grid grid-cols-1 gap-6"
          >
              <div className="shadow-green-600  shadow-lg sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <InputField label="Name" name="name" placeholder="Jane Doe" />
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane.doe@example.com"
                      />
                      <TextareaField
                        label="Message"
                        name="message"
                        placeholder="Write your message here…"
                      />
                      <button
                        type="submit"
                        className="ml-auto inline-flex items-center gap-2 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Send message{" "}
                        <span aria-hidden={true} className="text-xl">
                          &rarr;
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default ContactForm;
