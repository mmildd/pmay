import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Content, Header, Page, pageTheme } from '@backstage/core';
import SaveIcon from '@material-ui/icons/Save';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Swal from 'sweetalert2'; // alert
import {
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Link,
} from '@material-ui/core';
import { DefaultApi } from '../../api/apis'; // Api Gennerate From Command
import {
  EntExaminationroom,
  EntNurse,
  EntOperative,
  EntTool,
} from '../../api/models'; // import interface User

// header css
const HeaderCustom = {
  minHeight: '50px',
};

// css style
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
  },
}));

const Operativerecord: FC<{ email: string }> = email => {
  const classes = useStyles();
  const http = new DefaultApi();

  const [examinationrooms, setExaminationrooms] = React.useState<
    EntExaminationroom[]
  >([]);
  const [tools, setTools] = React.useState<EntTool[]>([]);
  const [operatives, setOperatives] = React.useState<EntOperative[]>([]);
  const [nurses, setNurses] = React.useState<EntNurse[]>([]);

  const getNurse = async () => {
    const res = await http.listNurse({ limit: 2, offset: 0 });
    setNurses(res);
    console.log(res);
  };

  const getExaminationroom = async () => {
    const res = await http.listExaminationroom({ limit: 3, offset: 0 });
    setExaminationrooms(res);
  };

  const getTool = async () => {
    const res = await http.listTool({ limit: 3, offset: 0 });
    setTools(res);
  };

  const getOperative = async () => {
    const res = await http.listOperative({ limit: 3, offset: 0 });
    setOperatives(res);
  };

  // Lifecycle Hooks
  useEffect(() => {
    getExaminationroom();
    getOperative();
    getTool();
    getNurse();
  }, []);

  const AddedhandleChange = (event: any) => {
    setOperativeTime(event.target.value as string);
  };
  const NursehandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNurseID(event.target.value as number);
    console.log();
  };

  const ToolhandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setToolID(event.target.value as string);
    console.log();
  };

  const ExaminationroomhandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setExaminationroomID(event.target.value as number);
    console.log();
  };

  const OperativehandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOperativeID(event.target.value as string);
    console.log();
  };

  const [added, setOperativeTime] = React.useState(String);
  const [nurseID, setNurseID] = React.useState(Number);
  const [examinationroomID, setExaminationroomID] = React.useState(Number);
  const [toolID, setToolID] = React.useState(String);
  const [operativeID, setOperativeID] = React.useState(String);

  // alert setting
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const operativerecords = {
    added: added + ":00+00:00",
    nurse: nurseID,
    examinationroom: examinationroomID,
    tool: toolID,
    operative: operativeID,
  };

  // function save data
  function save() {
    console.log(operativerecords);
   
    const apiUrl = 'http://localhost:8080/api/v1/operativerecords';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(operativerecords),
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === true) {
          Toast.fire({
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
          });
        } else {
          Toast.fire({
            icon: 'error',
            title: 'บันทึกข้อมูลไม่สำเร็จ',
          });
        }
      });
    examinationrooms.map(item => {
      console.log(item.edges);
    });
    // function find room with roomtype
  }

  return (
    <Page theme={pageTheme.service}>
      <Header style={HeaderCustom} title={`Operativerecord`}>
        <AccountCircleIcon
          aria-controls="fade-menu"
          aria-haspopup="true"
          fontSize="large"
        />
        <div style={{ marginLeft: 10 }}> </div>
        <Link component={RouterLink} to="/">
          Logout
        </Link>
      </Header>
      <Content>
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>

            <Grid item xs={3}>
              <div className={classes.paper}>ชื่อพยาบาล</div>
            </Grid>
            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="nurse_id"
                  name="nurse_id"
                  value={nurseID}
                  onChange={NursehandleChange}
                >
                  {nurses.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.nurseName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <div className={classes.paper}>รายการหัตถการ</div>
            </Grid>
            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  name="operative_id"
                  id="operative_id"
                  value={operativeID}
                  onChange={OperativehandleChange}
                >
                  {operatives.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.operativeName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <div className={classes.paper}>เครื่องมือ</div>
            </Grid>
            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="tool_id"
                  name="tool_id"
                  value={toolID}
                  onChange={ToolhandleChange}
                >
                  {tools.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.toolName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <div className={classes.paper}>ห้องตรวจ</div>
            </Grid>
            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="examinationroom_id"
                  name="examinationroom_id"
                  value={examinationroomID}
                  onChange={ExaminationroomhandleChange}
                >
                  {examinationrooms.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.examinationroomName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            


            <Grid item xs={3}>
              <div className={classes.paper}>เวลา</div>
            </Grid>
            <Grid item xs={9}>
              <form className={classes.container} noValidate>
                <TextField
                  label="เลือกเวลา"
                  name="added"
                  type="date"
                  value={added} // (undefined || '') = ''
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={AddedhandleChange}
                />
              </form>
            </Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={save}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Content>
    </Page>
  );
};

export default Operativerecord;
