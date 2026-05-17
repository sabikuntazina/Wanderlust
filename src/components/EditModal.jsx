"use client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  Card,
} from "@heroui/react";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";

const EditModal = ({data}) => {
  const {_id} = data
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

     const res= await fetch(`http://localhost:5000/destination/${_id}` , {
      method: 'PATCH',
      headers: {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(destination)
    })
    const data= await res.json();
    console.log(data)
  //     if(data.modifiedCount>0){
  //   revalidatePath(`destination/${data._id}`)
  //   redirect(`destination/${data._id}`)
  // }
  };
  return (
    <div>
      <Modal>
        <Button variant="secondary" className="flex justify-end">
          <FaRegEdit />
          Edit
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaRegEdit />
                </Modal.Icon>
                <Modal.Heading>Edit Destination</Modal.Heading>
               
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.destinationName} name="destinationName" isRequired>
                          <Label>Destination Name</Label>
                          <Input
                            placeholder="Bali Paradise"
                            className="rounded-2xl"
                          />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField defaultValue={data.country} name="country" isRequired>
                        <Label>Country</Label>
                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl"
                        />
                      </TextField>

                      {/* Category - Updated Select Component */}
                      <div>
                        <Select
                          name="category"
                          isRequired
                          className="w-full"
                          placeholder="Select category"
                          defaultValue={data.category}
                        >
                          <Label>Category</Label>
                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach" textValue="Beach">
                                Beach
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Mountain" textValue="Mountain">
                                Mountain
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="City" textValue="City">
                                City
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="Adventure"
                                textValue="Adventure"
                              >
                                Adventure
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Cultural" textValue="Cultural">
                                Cultural
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Luxury" textValue="Luxury">
                                Luxury
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField defaultValue={data.price} name="price" type="number" isRequired>
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl"
                        />
                      </TextField>

                      {/* Duration */}
                      <TextField defaultValue={data.duration} name="duration" isRequired>
                        <Label>Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="rounded-2xl"
                        />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.departureDate} name="departureDate" type="date" isRequired>
                          <Label>Departure Date</Label>
                          <Input type="date" className="rounded-2xl" />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.imageUrl} name="imageUrl" isRequired>
                          <Label>Image URL</Label>
                          <Input
                            type="url"
                            placeholder="https://example.com/bali-paradise.jpg"
                            className="rounded-2xl"
                          />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.description} name="description" isRequired>
                          <Label>Description</Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl"
                          />
                        </TextField>
                      </div>
                    </div>

                    {/* Buttons */}
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-none w-full bg-cyan-500 text-white"
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
