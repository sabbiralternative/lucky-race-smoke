const Stake = ({ runner, stake, stakeState }) => {
  return (
    <div data-v-3aa2fe16 className="bet-chip-container__inner">
      {stakeState?.[runner]?.show && (
        <div
          data-v-3aa2fe16
          className="bet-chip"
          data-content={100}
          style={{
            bottom: "20px",
            width: "var(--cg-px-64)",
            height: "var(--cg-px-64)",
          }}
        >
          <img
            data-v-3aa2fe16
            className="app-image chip-item-bg"
            src={`https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-${stakeState?.[runner]?.stake}.png.webp`}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default Stake;
