import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

export default function Enterprises() {
  return (
    <div className="bg-neutral-200 pt-32 rounded-tr-100px pl-64 pr-64 pb-32">
      <div className="flex justify-center text-4xl font-semibold">
        <label className="border-b-4 border-sky-500 p-3">
          Enterprise software done right!
        </label>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="justify-center mt-20">
            <div className="p-8 borde mr-8 shadow-lg">
              <div className="text-xl font-semibold mb-3">
                Vendor-agnostic solutions
              </div>
              <div className="text-wrap">
                In essence, a vendor-agnostic approach aims to promote
                flexibility, reduce dependency on a single vendor, and mitigate
                the risks associated with vendor lock-in. It enables
                organizations to select the best-of-breed solutions from various
                vendors based on their specific needs, preferences, and
                requirements, without being constrained by proprietary
                technologies or contractual obligations.
              </div>

              <button className="flex bg-sky-600 hover:bg-sky-500 shadow-md p-2 px-5 text-white mt-5 rounded">
                <FaGithub className="mr-2" size={20} /> Follow us on Github
              </button>
            </div>

            <div className="p-8 mr-8 shadow-lg mb-8">
              <div className="text-xl font-semibold mb-3">Fair Pricing</div>
              <div className="text-wrap">
                At InVision IBS, we believe in providing fair and transparent
                pricing for our comprehensive IT solutions. We understand the
                importance of offering competitive rates without compromising on
                the quality of our services. Our pricing structure is designed
                to be transparent and straightforward, ensuring that our clients
                know exactly what they are paying for. We take into account
                factors such as project complexity, scope, and duration to offer
                customized pricing solutions tailored to meet the unique needs
                of each client. With our commitment to fair pricing, we aim to
                build long-lasting relationships based on trust and value,
                ensuring mutual success in every partnership.
              </div>

              <button className="flex bg-sky-600 hover:bg-sky-500 shadow-md p-2 px-5 text-white mt-5 rounded">
                <IoPricetagsOutline className="mr-2" size={20} /> View Pricing
              </button>
            </div>

            <div className="p-8 mr-8 shadow-lg mb-8">
              <div className="text-xl font-semibold mb-3">
                No corporate bullsh*t
              </div>
              <div className="text-wrap">
                Unlike traditional systems that often fall short of
                expectations, Odoo consistently delivers beyond what you
                anticipate. Prepare to revolutionize the market with our
                unparalleled solutions
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="justify-center mt-20">
            <div className="p-8 mr-8 shadow-lg mb-8">
              <div className="text-xl font-semibold mb-3">
                The Superiority of Our ERP Solution
              </div>
              <div className="text-wrap">
                In today&apos;s dynamic business landscape, traditional ERP
                solutions often fall short in meeting the evolving needs of
                modern enterprises. Our ERP software revolutionizes this
                paradigm, offering an unparalleled value proposition that
                transforms operations and drives sustainable growth. Unlike
                conventional systems constrained by limited functionality, our
                ERP solution is a comprehensive powerhouse, meticulously crafted
                to cater to the diverse and intricate requirements of
                contemporary businesses.
                <br />
                <br />
                At the heart of our ERP software lies a commitment to empowering
                organizations with intuitive interfaces and robust capabilities.
                By seamlessly integrating with existing systems and processes,
                our solution optimizes workflows, enhances operational
                efficiency, and unlocks new opportunities for innovation. From
                finance to supply chain management, our customizable modules
                adapt effortlessly to your unique business requirements,
                ensuring seamless alignment with your strategic objectives.
                <br />
                <br />
                With a proven track record of success and a relentless
                dedication to continuous improvement, investing in our ERP
                software isn&apos;t just a transaction—it&apos;s a strategic
                partnership poised to deliver unparalleled value and long-term
                benefits for your organization. Experience the difference today
                and propel your business towards unprecedented levels of success
                with our cutting-edge ERP solution.
              </div>

              <hr />
              <button className="flex bg-sky-600 hover:bg-sky-500 shadow-md p-2 px-5 text-white mt-5 rounded">
                <FaLinkedin className="mr-2" size={20} /> Follow us on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
