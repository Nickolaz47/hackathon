import { useState } from "react";
import subjectOptions from "../data/subjectOptions.json";

const Profile = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [institution, setInstitution] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // Route to post profile image
  const uploads = "http://localhost:8080/uploads";
  const user = {};

  const handleFile = (e) => {
    e.preventDefault();
    // Image preview
    const image = e.target.files[0];
    setPreviewImage(image);
    // Change image state
    setProfileImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather user data from states
    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (password) {
      userData.password = password;
    }

    if (institution) {
      userData.institution = institution;
    }

    if (bio) {
      userData.bio = bio;
    }

    if (role) {
      userData.role = role;
    }

    if (subject) {
      userData.subject = subject;
    }

    // build form data
    const formData = new FormData();

    const userFormData = Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key])
    );

    formData.append("user", userFormData);

  };

  return (
    <div className="container">
      <h2 className="text-center title">Edite seus dados</h2>
      {(user.profileImage || previewImage) && (
        <img
          className="img-thumbnail rounded-circle"
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={user.name}
        />
      )}
      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Foto de perfil</label>
          <input type="file" className="form-control" onChange={handleFile} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Instituição</label>
          <input
            type="text"
            className="form-control"
            placeholder="Instituição"
            value={institution || ""}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Biografia</label>
          <input
            type="text"
            className="form-control"
            placeholder="Biografia"
            value={bio || ""}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Qual o seu perfil?</label>
          <br />
          <div className="text-center">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioOption"
                id="studentRadio"
                value="student"
                onChange={(e) => setRole(e.target.value)}
                defaultChecked={role === "student"}
              />
              <label className="form-check-label">Estudante</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioOption"
                id="mentorRadio"
                value="mentor"
                onChange={(e) => setRole(e.target.value)}
                defaultChecked={role === "mentor"}
              />
              <label className="form-check-label">Mentor</label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Escolha o tema que deseja aprender ou mentorar:
          </label>
          <select
            value={subject}
            defaultValue={subject}
            className="form-select"
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjectOptions.map(({ name, value }, idx) => (
              <option key={idx} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Profile;
