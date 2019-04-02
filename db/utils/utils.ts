export const formatGpData = (gpData: any) => {
  const formattedGpData = gpData.reduce((acc: any, val: any) => {
    acc.push({
      gp_id: val.gp_id,
      surgery_id: val.surgery_id,
      gp_name: val.gp_name
    });
    return acc;
  }, [])
  return formattedGpData;
}