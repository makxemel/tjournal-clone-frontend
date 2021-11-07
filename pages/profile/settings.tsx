import { Paper, TextField, Typography, Divider, Button } from '@material-ui/core';
import { MainLayout } from '../../layouts/MainLayout';

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-20 mb-30" />
        <form>
          <TextField
            className="mb-20"
            size="small"
            label="Никнейм"
            variant="outlined"
            fullWidth
            required
          />
          <TextField size="small" required fullWidth label="Эл. Почта" variant="outlined" />
          <TextField size="small" required fullWidth label="Пароль" variant="outlined" />
          <Divider className="mt-30 mb-20" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
