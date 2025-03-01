export default function RecentActivity() {
  return (
    <>
      <div
        className="card rounded-lg md:p-2 p-1 m-auto lg:h-[258px] w-[350px] md:w-64 md:h-[319px] text-primary-content lg:w-96"
        style={{ backgroundColor: "rgba(22, 30, 84, 1)" }}
      >
        <h2
          className="py-2 px-3.5 lg:text-[18px] text-[16px] "
          style={{
            backgroundColor: "rgba(27, 32, 74, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Recent Activity
        </h2>

        <div className="card-body">
          <p
            className="md:text-[12px] text-[10px]"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            {" "}
            10.40 AM, Fri 10 Sept 2021{" "}
          </p>
          <p className="lg:text-[18px] text-[16px] font-medium  text-white">
            You Posted a New Job
          </p>
          <p
            className="text-[14px] mb-3 font-light"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
          <div className="card-actions justify-end">
            <p
              className="mt-1.5 text-[14px]"
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              Today you makes 12 Activity
            </p>
            <button
              className="py-2 rounded-sm px-3.5 text-white"
              style={{ backgroundColor: "rgba(255, 81, 81, 1)" }}
            >
              See All Activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
