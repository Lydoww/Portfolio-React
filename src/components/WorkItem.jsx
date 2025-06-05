const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-600">
            {duration}
          </span>
        </p>

        {Array.isArray(details) ? (
          <div className="my-2 text-base font-medium text-stone-600">
            <ul className="list-disc pl-5 space-y-2">
              {details.map((item, index) => (
                <li key={index}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      <strong>
                        <a
                          href={item.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            item.url ? "text-[#001b5e] hover:underline" : ""
                          }`}
                        >
                          {item.project}
                        </a>
                        :
                      </strong>{" "}
                      {item.description}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="my-2 text-base font-medium text-stone-600">{details}</p>
        )}
      </li>
    </ol>
  );
};

export default WorkItem;
