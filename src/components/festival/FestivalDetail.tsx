import React from "react";
import PropTypes from "prop-types";
import { CardMedia, Dialog, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearFestivalDetail } from "../../redux/reducers/festival";
import { getFormattedDate } from "../../utils/TimeUtil";
import { RootStateInterface } from "../../@types/redux/rootState";

const FestivalDetail = () => {
  const { detail } = useSelector((state: RootStateInterface) => state.festivals);
  const dispatch = useDispatch();

  if (!detail) return null;
  const {
    title,
    firstimage,
    firstimage2,
    addr1,
    eventstartdate,
    eventenddate,
    overview,
    homepage,
  } = detail;
  const onClose = () => {
    dispatch(clearFestivalDetail());
  };

  const startDate = getFormattedDate(eventstartdate);
  const endDate = getFormattedDate(eventenddate);

  return (
    <Dialog open={Boolean(detail)} onClose={onClose}>
      <CardMedia image={firstimage || firstimage2 || "./images/noimage.png"} sx={{ height: 200 }} />
      <DialogTitle>
        {title}
        <Typography>
          {startDate} ~ {endDate}
        </Typography>
        <Typography variant="caption">{addr1}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography dangerouslySetInnerHTML={{ __html: overview }} />
        <Typography dangerouslySetInnerHTML={{ __html: homepage }} />
      </DialogContent>
    </Dialog>
  );
};

export default FestivalDetail;
