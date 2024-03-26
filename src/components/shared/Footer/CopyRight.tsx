const CopyRight = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <span className="text-second font-semibold"> Sea Sprout</span>
        </p>
      </aside>
    </footer>
  );
};

export default CopyRight;
