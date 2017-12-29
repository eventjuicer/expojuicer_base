import React from 'react';
import { translate } from 'admin-on-rest';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const mappings = ["skip","email","fname","lname","cname2"];

class CsvImportMappings extends React.PureComponent {

state = { mappings : {}}

handleChange = (event, index, value, row) => {

  //pass down mapping....

  const {onMappingsChange} = this.props;

  //const key = "pos" + row;

  const newItems = { ...this.state.mappings };
  newItems[row] = value;
  this.setState({ mappings : newItems });

  onMappingsChange(newItems);

//    this.props.input.onChange(hex);

};

getMappingFor(row, sampleValue)
{
  const {mappings} = this.state;

  if(row in mappings)
  {
    return mappings[row];
  }

  if(sampleValue.indexOf("@")>0)
  {
    return "email";
  }

  return "skip";
}

selectRowForSample()
{



}


renderMappings(row, sampleValue)
{

  const { translate } = this.props;

  return (

    <SelectField
          floatingLabelText = "What is it?"
          value = {this.getMappingFor(row, sampleValue)}
        //  errorText={"asd"}
          onChange = {(event,index,value) => this.handleChange(event,index,value,row)}>

          {mappings.map((item,i) =>
            <MenuItem key={i} value={item} primaryText={translate(`fields.${item}`)} />

          )}
    </SelectField>
  );
}



render(){

  const {data} = this.props;

  if(data && typeof data[1] != "undefined" && Array.isArray(data[1]))
  {

    console.log("renderd");

    return (

      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {data[1].map((cell,i)=>{

          return cell.length && <TableRow key={i}>
                  <TableRowColumn>{cell}</TableRowColumn>
                  <TableRowColumn>{this.renderMappings(i, cell) }</TableRowColumn>
           </TableRow>
         })}
      </TableBody>
      </Table>
    )

  }

  return (<div></div>);

}
}


export default translate(CsvImportMappings);
