import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => { // función flecha devolviendo la biblioteca
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle);
};

export default Icons; // Exportar