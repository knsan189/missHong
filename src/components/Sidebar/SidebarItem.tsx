import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getFestivalDetailRequest } from "../../redux/reducers/festival";
import { getFormattedDate } from "../../utils/TimeUtil";
import { festivalProps } from "../../types/festival";

interface itemProps {
  festival: festivalProps;
}

const SidebarItem = ({ festival }: itemProps) => {
  const { title, contentid, firstimage, firstimage2, addr1, eventenddate, eventstartdate } =
    festival;

  const dispatch = useDispatch();
  const theme = useTheme();

  const onClick = () => {
    dispatch(getFestivalDetailRequest(contentid));
  };

  const startDate = getFormattedDate(eventstartdate);
  const endDate = getFormattedDate(eventenddate);

  return (
    <ListItem button divider onClick={onClick}>
      <ListItemAvatar sx={{ mr: 2 }}>
        <Avatar
          src={firstimage || firstimage2}
          variant="rounded"
          sx={{ width: 100, height: 100 }}
        />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="subtitle1" gutterBottom noWrap>
          {title}
        </Typography>
        <Typography variant="body2" noWrap sx={{ color: theme.palette.text.secondary }}>
          {addr1}
        </Typography>
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
          {startDate} ~ {endDate}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default SidebarItem;
