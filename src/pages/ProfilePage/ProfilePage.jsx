import Layout from "../../layouts/Layout";
import gubernatorial from "../../data/gubernatorial.json";
import deputygubernatorial from "../../data/deputygubernatorial.json";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
        <div className="grid grid-cols-2 gap-20">
          <div className="lg:col-span-1 col-span-2 flex flex-col">
            <img
              src={gubernatorial.image}
              alt=""
              className="lg:w-96 md:w-80 w-52 lg:h-[450px] md:h-[350px] h-[250px] self-center"
            />
            <div className="relative w-full border-t-4 border-primary">
              <h2 className="absolute lg:-top-7 md:-top-5 -top-3 left-0 lg:text-3xl md:text-xl text-sm font-bold bg-secondary text-white py-1 px-10 rounded-lg">
                {gubernatorial.name}
              </h2>
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="lg:text-xl md:text-lg text-[10px] font-primary">
                <span className="font-bold">Tempat, Tanggal Lahir : </span>
                {gubernatorial.place_of_birth}, {gubernatorial.date_of_birth}
              </p>
              <p className="lg:text-xl md:text-lg text-[10px] font-primary">
                <span className="font-bold">Agama : </span>
                {gubernatorial.religion}
              </p>
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                KELUARGA
              </p>
              <p className="lg:text-xl md:text-lg text-[10px] font-primary">
                <span className="font-bold">Istri : </span>
                {gubernatorial.wife}
              </p>
              {gubernatorial.children.map((child, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  <span className="font-bold">Anak ke-{index + 1} : </span>
                  {child}
                </p>
              ))}
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                RIWAYAT PENDIDIDIKAN
              </p>
              {gubernatorial.academic_history.map((item, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  {item.name}
                  <span className="font-bold"> &#40; {item.year} &#41;</span>
                </p>
              ))}
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                RIWAYAT JABATAN
              </p>
              {gubernatorial.job_history.map((item, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  {item.position}
                  <span className="font-bold"> &#40; {item.year} &#41;</span>
                </p>
              ))}
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                RIWAYAT ORGANISASI
              </p>
              {gubernatorial.organization_history.map((item, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  {item.name}
                  <span className="font-bold"> &#40; {item.year} &#41;</span>
                </p>
              ))}
            </div>
          </div>
          {/* ---------- */}
          <div className="lg:col-span-1 col-span-2 flex flex-col">
            <img
              src={deputygubernatorial.image}
              alt=""
              className="lg:w-96 md:w-80 w-52 lg:h-[450px] md:h-[350px] h-[250px] self-center"
            />
            <div className="relative w-full border-t-4 border-primary">
              <h2 className="absolute lg:-top-7 md:-top-5 -top-3 left-0 lg:text-3xl md:text-xl text-sm font-bold bg-secondary text-white py-1 px-10 rounded-lg">
                {deputygubernatorial.name}
              </h2>
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="lg:text-xl md:text-lg text-[10px] font-primary">
                <span className="font-bold">Tempat, Tanggal Lahir : </span>
                {deputygubernatorial.place_of_birth},{" "}
                {deputygubernatorial.date_of_birth}
              </p>
              <p className="lg:text-xl md:text-lg text-[10px] font-primary">
                <span className="font-bold">Agama : </span>
                {deputygubernatorial.religion}
              </p>
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                KELUARGA
              </p>
              <p className="lg:text-xl md:text-lg text-[10px] font-primary">
                <span className="font-bold">Istri : </span>
                {deputygubernatorial.wife}
              </p>
              {deputygubernatorial.children.map((child, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  <span className="font-bold">Anak ke-{index + 1} : </span>
                  {child}
                </p>
              ))}
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                RIWAYAT PENDIDIDIKAN
              </p>
              {deputygubernatorial.academic_history.map((item, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  {item.name}
                  <span className="font-bold"> &#40; {item.year} &#41;</span>
                </p>
              ))}
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                RIWAYAT JABATAN
              </p>
              {deputygubernatorial.job_history.map((item, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  {item.position}
                  <span className="font-bold"> &#40; {item.year} &#41;</span>
                </p>
              ))}
            </div>
            <div className="space-y-2 lg:mt-10 mt-5">
              <p className="text-primary lg:text-xl md:text-lg text-base font-extrabold">
                RIWAYAT TANDA PENGHORMATAN
              </p>
              {deputygubernatorial.respect_history.map((item, index) => (
                <p
                  className="lg:text-xl md:text-lg text-[10px] font-primary"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
