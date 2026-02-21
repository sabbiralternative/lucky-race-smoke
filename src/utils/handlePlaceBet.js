import { Status } from "../const";
import { handleStoreRecentPlay } from "./handleStorateRecentPlay";
import { playPlaceChip } from "./sound";

export const handlePlaceBet = ({
  payload,
  status,
  sound,
  setIsLoading,
  username,
  eventId,
  gameName,
  stakeState,
  setStakeState,
  initialState,
  setAnimation,
  stake,
}) => {
  if (status === Status.OPEN) {
    setIsLoading(true);
    handleStoreRecentPlay(username, eventId, gameName);
    const isRepeatTheBet = Object.values(stakeState).find(
      (item) => item?.selection_id && item?.show === false
    );
    if (isRepeatTheBet) {
      setStakeState(initialState);
    }
    if (sound) playPlaceChip();
    const { key, data, dataIndex, runnerIndex, type } = payload;

    setAnimation([key]);
    const formatData = {
      marketId: data?.[dataIndex]?.marketId,
      roundId: data?.[dataIndex]?.roundId,
      name: data?.[dataIndex]?.name,
      eventId: data?.[dataIndex]?.eventId,
      eventName: data?.[dataIndex]?.eventName,
      selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
      runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
      isback: type === "back" ? 0 : 1,
      event_id: data?.[dataIndex]?.eventId,
      event_type_id: data?.[dataIndex]?.event_type_id,
      price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
    };
    const timeout = setTimeout(() => {
      setAnimation([]);
      setStakeState((prev) => {
        const maxSerial = Math.max(
          0,
          ...Object.values(prev)
            .map((item) => item.serial)
            .filter((serial) => serial !== undefined)
        );

        return {
          ...prev,
          [key]: {
            roundId: formatData?.roundId,
            name: formatData?.name,
            eventId: formatData?.eventId,
            eventName: formatData?.eventName,
            show: true,
            animation: false,
            stake: prev[key].show
              ? prev[key].stake + prev[key].actionBy
              : prev[key].stake,
            marketId: formatData?.marketId,
            selection_id: formatData?.selection_id,
            price: formatData?.price,
            runner_name: formatData?.runner_name,
            isback: formatData?.isback,
            serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
            actionBy: stake,
            undo: [...(prev[key]?.undo || []), stake],
          },
        };
      });
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }
};
