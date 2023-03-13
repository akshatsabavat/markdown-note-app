import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Tag } from "../App";

type NoteCardProps = {
  tags: Tag[];
  title: string;
  id: string;
};

const NoteCard: React.FC<NoteCardProps> = ({ tags, title, id }) => {
  return (
    <Card as={Link} to={`/${id}`}>
      <CardBody border="solid 1px black">
        <Heading as="h1">{title}</Heading>
        <CardFooter>
          {tags.map((tag) => {
            return <Badge colorScheme="green">{tag.label}</Badge>;
          })}
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
