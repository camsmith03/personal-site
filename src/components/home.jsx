function Home() {
  const yearsOfExperience = new Date().getFullYear() - 2017;

  return (
    <>
      <div>
        <br />
        <h1 className="top-header">Hi my name is Cameron Smith</h1>
        <br />
      </div>
      <div style={{ textSize: "2.071em" }}>
        <p>
          I&apos;m a fourth year CS student at Virginia Tech studying OS kernel
          enginnering, backend Java programming, full-stack development, and
          AI/ML.
        </p>
      </div>
      <div style={{ textSize: "1.701em" }}>
        <p>
          With over {yearsOfExperience}+ years of hands-on software development
          experience, I&apos;ve refined my skills across the entire stack and
          applied them to build robust and scalable applications.
          <br />
          <br />
          My academic focus is on the design and optimization of operating
          systems, with an interest in kernel development.
        </p>
        <br />
      </div>
    </>
  );
}

export default Home;
