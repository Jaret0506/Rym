export default function SearchBar({ onSearch }) {
  var handlerSearch = () => {
    var input = document.getElementById("inputSearch");
    onSearch(input.value);
    input.value = "";
  };

  return (
    <div>
      <input id="inputSearch" type="search" placeholder="Ingresá un ID" />
      <button
        onClick={() => {
          handlerSearch();
        }}
      >
        Agregar
      </button>
    </div>
  );
}
