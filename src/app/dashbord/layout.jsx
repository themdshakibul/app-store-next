
const layout = ({ children }) => {
  return (
    <section>
      <div>
        <aside>
          <h2>Aside bar</h2>
        </aside>
        {children}
      </div>
    </section>
  );
};

export default layout;
