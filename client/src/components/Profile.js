// Components
import Message from "./Message";
// Hooks
import { useEffect, useState, useContext } from "react";
import { useUserCrud } from "../hooks/useUserCrud";
// Contexts
import { UserContext } from "../contexts/UserContext";
// Data
import subjectOptions from "../data/subjectOptions.json";
import { uploads } from "../utils/config";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [institution, setInstitution] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const { user } = useContext(UserContext);
  const { getCurrentUser, updateUser, error, loading, message } = useUserCrud();
  useEffect(() => {
    const fetchRequest = async () => {
      if (user) {
        const res = await getCurrentUser(user);
        setCurrentUser(res);
      }
    };
    fetchRequest();
  }, [user]);

  // Fill user form
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setBio(currentUser.bio);
      setRole(currentUser.role);
      setSubject(currentUser.subject);
      setInstitution(currentUser.institution);
    }
  }, [currentUser]);

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
    const userData = {};

    if (name) {
      userData.name = name;
    }

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

    // Build form data
    const formData = new FormData();
    const userFormData = Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key])
    );

    formData.append("user", userFormData);
    await updateUser(formData);
  };

  return (
    <div className="container">
      <h2 className="text-center title">Edite seus dados</h2>
      {(currentUser.profileImage || previewImage) && (
        <div className="text-center">
          <img
            className="img-thumbnail mb-2 rounded-circle"
            style={{
              maxHeight: "175px",
              maxWidth: "175px",
            }}
            src={
              previewImage
                ? URL.createObjectURL(previewImage)
                : `${uploads}/${currentUser.profileImage}`
            }
            alt={currentUser.name}
          />
        </div>
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
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            value={email || ""}
            readOnly
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
                checked={role === "student"}
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
                checked={role === "mentor"}
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
            className="form-select"
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjectOptions.map(({ name, value }, idx) => (
              <option key={idx} value={value} selected={subject === value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="mx-auto text-center my-3">
          {!loading && (
            <button className="btn btn-primary" type="submit">
              Atualizar
            </button>
          )}
          {loading && (
            <button className="btn btn-primary" type="submit" disabled>
              Atualizando...
            </button>
          )}
          {error && <Message msg={error} type="error" />}
          {message && <Message msg={message} type="success" />}
        </div>
      </form>
    </div>
  );
};

export default Profile;
