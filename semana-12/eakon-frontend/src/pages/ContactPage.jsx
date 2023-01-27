import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
import useContact from "../hooks/useContact";
import { fetchReadContactData } from "../redux/thunks/contactThunk";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { loading, contactData } = useContact();

  useEffect(() => {
    document.title = "¡Nosotros! I EAKON";
    Object.keys(contactData).length === 0 && dispatch(fetchReadContactData());
  }, []);

  return <>{loading && <LoadersModal />}</>;
};
export default ContactPage;
