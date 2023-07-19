function ProjectsSecondary(props) {
  return (
    <div>
      <label className="btn swap swap-rotate h-80 bg-gray-800
      hover:bg-gray-900">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-off fill-current ">
          <div>
            <h5 className="pt-3 mb-3">{props.titulo}</h5>
            <img className="w-[40rem] h-[15rem] rounded-3xl" src={props.imagen} alt="XD" />
          </div>
        </div>

        <div className="swap-on fill-current">
          <div className="back-content">
            <p className="mb-16">{props.descripcion}</p>
            <button>
              <a href={props.linkGithub} target="_blank">
                Ver GitHub
              </a>
            </button>
            <br />
            <button>
              <a href={props.linkPagina} target="_blank">
                Ver Página
              </a>
            </button>
          </div>
        </div>
      </label>
    </div>
  );
}

export default ProjectsSecondary;
