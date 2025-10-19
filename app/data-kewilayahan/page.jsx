import wilayahData from "../../data/wilayah.json";

export default function DataWilayahPage() {
  const { identitas } = wilayahData;

  return (
    <div className="container" style={{ marginTop: "100px", marginBottom:"100px"}}>
      <h1 className="mb-3 text-center fw-bold text-primary">
        Data Wilayah Desa {identitas.desa}
      </h1>
      <p className="text-center text-muted small mb-5">
        *Data berdasarkan sumber tahun 2021*
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title mb-3">🗺️ Identitas Wilayah</h4>
              <table className="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td><strong>Desa</strong></td>
                    <td>{identitas.desa}</td>
                  </tr>
                  <tr>
                    <td><strong>Kecamatan</strong></td>
                    <td>{identitas.kecamatan}</td>
                  </tr>
                  <tr>
                    <td><strong>Kabupaten</strong></td>
                    <td>{identitas.kabupaten}</td>
                  </tr>
                  <tr>
                    <td><strong>Provinsi</strong></td>
                    <td>{identitas.provinsi}</td>
                  </tr>
                  <tr>
                    <td><strong>Luas Wilayah</strong></td>
                    <td>{identitas.luas_km2} km²</td>
                  </tr>
                  <tr>
                    <td><strong>Jumlah Penduduk</strong></td>
                    <td>{identitas.penduduk}</td>
                  </tr>
                  <tr>
                    <td><strong>Jumlah KK</strong></td>
                    <td>{identitas.kk}</td>
                  </tr>
                  <tr>
                    <td><strong>Kepadatan</strong></td>
                    <td>{identitas.kepadatan} jiwa/km²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title mb-3">📍 Lokasi Desa {identitas.desa}</h4>
              <div className="ratio ratio-16x9">
                <iframe
                  src={identitas.map_embed}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
