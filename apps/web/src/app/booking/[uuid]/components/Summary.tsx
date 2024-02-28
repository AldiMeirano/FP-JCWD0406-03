const Summary = ({ room, dataRange, getTotalSummary }: any) => {
  let totalPrice = 0;
  let differenceInDays = 0;
  if (dataRange.startDate && dataRange.endDate) {
    const differenceInTime =
      dataRange.endDate.getTime() - dataRange.startDate.getTime();
    differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    totalPrice = room?.price * differenceInDays;
  }
  const totalSummary = totalPrice + 450000;
  const handleGetTotal = (getTotal: number) => {
    getTotalSummary(getTotal);
  };
  handleGetTotal(totalSummary);
  return (
    <>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Price details</h3>
        <div className="flex justify-between">
          <p className="text-sm text-gray-800">
            Rp.{room?.price?.toLocaleString('id-ID')} x {differenceInDays}{' '}
            nights
          </p>
          <p className="text-sm text-gray-600">
            Rp.{(room?.price * differenceInDays).toLocaleString('id-ID')}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-800">Cleaning fee</p>
          <p className="text-sm text-gray-600">Rp.200,000</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-800">Rumah123 service fee</p>
          <p className="text-sm text-gray-600">Rp.150,000</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-800">PPN</p>
          <p className="text-sm text-gray-600">Rp.100,000</p>
        </div>
      </div>
      <hr className="my-6 border-t border-gray-200" />
      <div className="flex justify-between">
        <p className="text-base font-semibold text-gray-800">Total</p>
        <p className="text-base font-semibold text-gray-600">
          Rp.{totalSummary.toLocaleString('id-ID')}
        </p>
      </div>
    </>
  );
};

export default Summary;
