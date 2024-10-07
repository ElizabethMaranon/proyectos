import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "Marvel",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
      editMode: false, // Todavía no editable
      apiUrl: "https://mielmadev.devcamp.space/portfolio/portfolio_items", // Url API
      apiAction: "post" // Predeterminado, si editamos, se activará
    };
    // Vincular
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this); // vincular

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();
  }

  deleteImage(imageType) { // Crear función eliminación
    axios
      .delete(
        `https://api.devcamp.space/portfolio/delete-portfolio-image/${this.state
          .id}?image_type=${imageType}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          [`${imageType}_url`]: ""
        });
      })
      .catch(error => {
        console.log("deleteImage error", error);
      });
  }

  componentDidUpdate() { // Componente actualizado
    if (Object.keys(this.props.portfolioToEdit).length > 0) { // Condicional si tiene claves
      const { // Deconstrucción para extraer datos, tomar accesorios y dividir elemento.
        id,
        name,
        description,
        category,
        position,
        url,
        thumb_image_url,
        banner_image_url,
        logo_url
      } = this.props.portfolioToEdit; // tomar elemento y almacenar en variable

      this.props.clearPortfolioToEdit();

      this.setState({ // llamar y completar estado
        id: id,
        name: name || "", // si no se especifica, tomará la "string"
        description: description || "",
        category: category || "Marvel",
        position: position || "",
        url: url || "",
        editMode: true,
        apiUrl: `https://mielmadev.devcamp.space/portfolio/portfolio_items/${id}`,// Url API
        apiAction: "patch", // Predeterminado, si editamos, se activará
        thumb_image_url: thumb_image_url || "",// Predeterminado, si editamos, se activará
        banner_image_url: banner_image_url || "",// Predeterminado, si editamos, se activará
        logo_url: logo_url || ""// Predeterminado, si editamos, se activará
      });
    }
  }

  handleThumbDrop() {
    return {
      addedfile: file => this.setState({ thumb_image: file })
    };
  }

  handleBannerDrop() {
    return {
      addedfile: file => this.setState({ banner_image: file })
    };
  }

  handleLogoDrop() {
    return {
      addedfile: file => this.setState({ logo: file })
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

    if (this.state.thumb_image) {
      formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
    }

    if (this.state.banner_image) {
      formData.append("portfolio_item[banner_image]", this.state.banner_image);
    }

    if (this.state.logo) {
      formData.append("portfolio_item[logo]", this.state.logo);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,// método si no hay registro, publicar, sino, actualizar
      url: this.state.apiUrl, // actualizar la url
      data: this.buildForm(), // Pasar datos
      withCredentials: true
    })
      .then(response => {// Cuando llamar al proceso
        if (this.state.editMode) { // si el estado es editar
          this.props.handleEditFormSubmission(); // editar formulario
        } else { // sino
          this.props.handleNewFormSubmission(response.data.portfolio_item); // crear nuevo registro
        }

        this.setState({
          name: "",
          description: "",
          category: "Marvel",
          position: "",
          url: "",
          thumb_image: "",
          banner_image: "",
          logo: "",
          editMode: false,
          apiUrl: "https://mielmadev.devcamp.space/portfolio/portfolio_items",
          apiAction: "post"
        });

        [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
          ref.current.dropzone.removeAllFiles();
        });
      })
      .catch(error => {
        console.log("portfolio form handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Portfolio Item Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="URL"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </div>

        <div className="two-column">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={this.state.position}
            onChange={this.handleChange}
          />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Marvel">Marvel</option>
            <option value="Dc">Dc</option>
            <option value="Otras">Otras</option>
          </select>
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders">
          {this.state.thumb_image_url && this.state.editMode ? ( // Agregar operador ternario y ClassName
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.thumb_image_url} />

              <div className="image-removal-link">{/* ClassName*/}
                <a onClick={() => this.deleteImage("thumb_image")}>{/*OnClick Event*/}
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent  // Aplicable a thumb
              ref={this.thumbRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleThumbDrop()}
            >
              <div className="dz-message">Thumbnail</div>
            </DropzoneComponent>
          )}

          {this.state.banner_image_url && this.state.editMode ? ( // Agregar operador ternario y ClassName
            <div className="portfolio-manager-image-wrapper">
              <img src={this.state.banner_image_url} />{/*Mostrar banner_image */}

              <div className="image-removal-link">{/*ClassName */}
                <a onClick={() => this.deleteImage("banner_image")}>{/*OnClick Event*/}
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.bannerRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleBannerDrop()}
            >
              <div className="dz-message">Banner</div>
            </DropzoneComponent>
          )}

          {this.state.logo_url && this.state.editMode ? (// Agregar operador ternario y ClassName
            <div className="portfolio-manager-image-wrapper">{/*ClassName */}
              <img src={this.state.logo_url} />

              <div className="image-removal-link">{/*ClassName */}
                <a onClick={() => this.deleteImage("logo")}>Remove file</a>{/*OnClick Event*/}
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.logoRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleLogoDrop()}
            >
              <div className="dz-message">Logo</div>
            </DropzoneComponent>
          )}

        </div>

        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}